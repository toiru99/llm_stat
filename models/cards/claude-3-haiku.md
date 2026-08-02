---
type: Model
title: Claude 3 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.3, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 12.6, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 21.6, z: -1.06, r: 34.1, estimated: false }  # 코딩
  agentic: { s: 11.4, z: -0.97, r: 35.4, estimated: false }  # 에이전트
  trust: { s: 24.1, z: -0.19, r: 47.2, estimated: false }  # 신뢰성
  multimodal: { s: 22.9, z: -2.36, r: 14.7, estimated: false }  # 멀티모달
  long_context: { s: 27.6, z: -0.65, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Claude 3 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $1.25 · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.0 | -0.8 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.1 | -1.06 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 35.4 | -0.97 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 47.2 | -0.19 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 14.7 | -2.36 | 실측 | [[mmmu-pro]] 31.0%×1.0 |
| 긴문맥 | 40.3 | -0.65 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
