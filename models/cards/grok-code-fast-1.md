---
type: Model
title: Grok Code Fast 1
creator: SpaceXAI
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.2, z: 0.1, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.8, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 48.6, z: 0.12, r: 51.7, estimated: false }  # 코딩
  agentic: { s: 51.3, z: 0.59, r: 58.9, estimated: false }  # 에이전트
  trust: { s: 23.5, z: -0.2, r: 47.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 63.2, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.47, r: 43.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Code Fast 1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Grok Code Fast 1

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.1 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 51.7 | +0.12 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 58.9 | +0.59 | 실측 | [[tau2-bench]] 76.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 47.1 | -0.2 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 48.0%×1.0 |
| 지시 따르기 | 43.0 | -0.47 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
