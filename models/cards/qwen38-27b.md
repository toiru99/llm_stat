---
type: Model
title: Qwen3.8 27B
creator: Alibaba
license: Open
intelligence_index: 35.0
price_blended_usd_1m: 0.435
output_speed_tps: 53.0
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: false
radar:
  knowledge: { s: 31.7, z: -0.45, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.0, z: 0.03, r: 50.4, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 46.9, z: 0.39, r: 55.9, estimated: false }  # 에이전트
  trust: { s: 82.5, z: 2.76, r: 91.4, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.6, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.82, r: 62.2, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.41, r: 56.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Qwen3.8 27B

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 53.0 t/s · TTFT 3.85s · 256k ctx` · 가성비 80.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.45 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 50.4 | +0.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 55.9 | +0.39 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 91.4 | +2.76 | 실측 | [[aa-omniscience]] 82.0%×1.0 |
| 멀티모달 | 55.6 | +0.37 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 62.2 | +0.82 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 56.1 | +0.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
