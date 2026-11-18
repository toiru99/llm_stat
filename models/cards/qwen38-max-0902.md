---
type: Model
title: Qwen3.8 Max (0902)
creator: Alibaba
license: Proprietary
intelligence_index: 33.6545627367888
price_blended_usd_1m: 1.175
output_speed_tps: 60.03516740998768
context_window: 983616
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.5, z: 1.55, r: 73.3, estimated: false }  # 전문 지식
  reasoning: { s: 67.7, z: 1.58, r: 73.7, estimated: false }  # 추론
  coding: { s: 74.3, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 92.3, z: 1.64, r: 74.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.1, z: 1.0, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 78.6, z: 1.03, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max (0902)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Qwen3.8 Max (0902)

Alibaba · Proprietary · Unknown · 컨텍스트 983k · 종합지능 **33.6545627367888** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 60.03516740998768 t/s · TTFT 3.5489699579873353s · 983k ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.3 | +1.55 | 실측 | [[gpqa-diamond]] 92.82828282828281%×0.4, [[humanitys-last-exam]] 43.0954587581094%×0.3 |
| 추론 | 73.7 | +1.58 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[gpqa-diamond]] 92.82828282828281%×1.0, [[humanitys-last-exam]] 43.0954587581094%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 52.0833333333333%×1.0 |
| 에이전트 | 74.6 | +1.64 | 실측 | [[gdpval]] 1674.05%×1.0, [[tau3-banking]] 47.835051546391796%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.1 | +1.0 | 실측 | [[mmmu-pro]] 82.7745664739884%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
