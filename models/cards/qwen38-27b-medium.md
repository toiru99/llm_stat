---
type: Model
title: Qwen3.8 27B (medium)
creator: Alibaba
license: Open
intelligence_index: 44.0
price_blended_usd_1m: 0.435
output_speed_tps: 46.0
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 40.5, z: -0.0, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 36.9, z: 0.1, r: 51.6, estimated: false }  # 추론
  coding: { s: 61.3, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 82.0, z: 1.73, r: 75.9, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.35, r: 55.2, estimated: false }  # 신뢰성
  multimodal: { s: 83.1, z: 0.62, r: 59.3, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 77.2, z: 1.01, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3.8 27B (medium)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 46.0 t/s · TTFT 4.03s · 256k ctx` · 가성비 101.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | +-0.0 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 51.6 | +0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 75.9 | +1.73 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 55.2 | +0.35 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 59.3 | +0.62 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 65.2 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
