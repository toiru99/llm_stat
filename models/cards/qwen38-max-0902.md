---
type: Model
title: Qwen3.8 Max (0902)
creator: Alibaba
license: Proprietary
intelligence_index: 33.6545627367888
price_blended_usd_1m: 1.175
output_speed_tps: 60.59670479144984
context_window: 983616
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.5, z: 1.57, r: 73.5, estimated: false }  # 전문 지식
  reasoning: { s: 67.7, z: 1.6, r: 74.0, estimated: false }  # 추론
  coding: { s: 74.3, z: 1.18, r: 67.6, estimated: false }  # 코딩
  agentic: { s: 92.3, z: 1.65, r: 74.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.3, z: 1.03, r: 65.4, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 78.0, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max (0902)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.8 Max (0902)

Alibaba · Proprietary · Unknown · 컨텍스트 983k · 종합지능 **33.6545627367888** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 60.59670479144984 t/s · TTFT 3.6896166058059308s · 983k ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.5 | +1.57 | 실측 | [[gpqa-diamond]] 92.82828282828281%×0.4, [[humanitys-last-exam]] 43.0954587581094%×0.3 |
| 추론 | 74.0 | +1.6 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[gpqa-diamond]] 92.82828282828281%×1.0, [[humanitys-last-exam]] 43.0954587581094%×1.0 |
| 코딩 | 67.6 | +1.18 | 실측 | [[scicode]] 52.0833333333333%×1.0 |
| 에이전트 | 74.8 | +1.65 | 실측 | [[gdpval]] 1674.05%×1.0, [[tau3-banking]] 47.835051546391796%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.4 | +1.03 | 실측 | [[mmmu-pro]] 82.7745664739884%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
