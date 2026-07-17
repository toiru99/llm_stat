---
type: Model
title: Claude 4 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.7, z: 0.1, r: 51.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.8, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 60.1, z: 0.58, r: 58.7, estimated: false }  # 코딩
  agentic: { s: 45.9, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: 82.4, z: 2.57, r: 88.6, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.17, r: 47.5, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.34, r: 55.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Claude 4 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 12.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.5 | +0.1 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 58.7 | +0.58 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[gdpval]] 18.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 88.6 | +2.57 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | 47.5 | -0.17 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 55.1 | +0.34 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
