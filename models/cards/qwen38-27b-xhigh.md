---
type: Model
title: Qwen3.8 27B (xhigh)
creator: Alibaba
license: Open
intelligence_index: 52.0
price_blended_usd_1m: 0.435
output_speed_tps: 44.0
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 46.5, z: 0.31, r: 54.6, estimated: false }  # 전문 지식
  reasoning: { s: 55.9, z: 1.08, r: 66.2, estimated: false }  # 추론
  coding: { s: 72.6, z: 1.1, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 85.3, z: 1.88, r: 78.2, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.18, r: 82.7, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.79, r: 61.8, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.31, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.39, r: 70.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3.8 27B (xhigh)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 44.0 t/s · TTFT 3.94s · 256k ctx` · 가성비 119.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.6 | +0.31 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 66.2 | +1.08 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 66.4 | +1.1 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 78.2 | +1.88 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 48.0%×1.0 |
| 신뢰성 | 82.7 | +2.18 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | 61.8 | +0.79 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 69.7 | +1.31 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 70.9 | +1.39 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
