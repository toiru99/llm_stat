---
type: Model
title: GPT-5.6 Terra (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 116.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.2, z: 0.87, r: 63.0, estimated: false }  # 전문 지식
  reasoning: { s: 66.4, z: 0.93, r: 63.9, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 54.6, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.82, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 67.6, z: 0.62, r: 59.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GPT-5.6 Terra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 116.0 t/s · TTFT 1.59s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.0 | +0.87 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 63.9 | +0.93 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[gdpval]] 1117.0%×1.0, [[tau3-banking]] 19.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 62.4 | +0.82 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 59.4 | +0.62 | 실측 | [[ifbench]] 60.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
