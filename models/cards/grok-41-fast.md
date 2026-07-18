---
type: Model
title: Grok 4.1 Fast
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.3, z: 0.47, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.8, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 61.0, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 65.2, z: 1.12, r: 66.8, estimated: false }  # 에이전트
  trust: { s: 31.8, z: 0.19, r: 52.9, estimated: false }  # 신뢰성
  multimodal: { s: 69.6, z: -0.1, r: 48.5, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.22, r: 53.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Grok 4.1 Fast

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.47 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 66.8 | +1.12 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 52.9 | +0.19 | 실측 | [[aa-omniscience]] 28.0%×1.0 |
| 멀티모달 | 48.5 | -0.1 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 53.3 | +0.22 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
