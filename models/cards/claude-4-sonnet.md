---
type: Model
title: Claude 4 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.7, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.8, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 60.1, z: 0.54, r: 58.2, estimated: false }  # 코딩
  agentic: { s: 45.4, z: 0.35, r: 55.2, estimated: false }  # 에이전트
  trust: { s: 80.5, z: 2.48, r: 87.2, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.22, r: 46.7, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.31, r: 54.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# Claude 4 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 58.2 | +0.54 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 55.2 | +0.35 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 87.2 | +2.48 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | 46.7 | -0.22 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 54.6 | +0.31 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
