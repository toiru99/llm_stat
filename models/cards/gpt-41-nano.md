---
type: Model
title: GPT-4.1 nano
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0775
output_speed_tps: 277.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.4, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.3, z: -0.87, r: 36.9, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -0.89, r: 36.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 34.2, z: -1.89, r: 21.7, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.89, r: 36.6, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.03, r: 34.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-4.1 nano

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.0775/1M · 277.0 t/s · TTFT 1.46s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.9 | -0.87 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 36.6 | -0.89 | 실측 | [[gdpval]] 206.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 21.7 | -1.89 | 실측 | [[mmmu-pro]] 40.0%×1.0 |
| 긴문맥 | 36.6 | -0.89 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 34.6 | -1.03 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
