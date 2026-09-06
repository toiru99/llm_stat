---
type: Model
title: Grok 4.20 0309 (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 16.0
price_blended_usd_1m: 1.14
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.7, z: 0.38, r: 55.7, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 33.3, z: 0.04, r: 50.6, estimated: false }  # 코딩
  agentic: { s: 52.0, z: 0.56, r: 58.4, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.1, r: 48.4, estimated: false }  # 멀티모달
  long_context: { s: 28.1, z: -0.65, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.08, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.20 0309 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Grok 4.20 0309 (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **16.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.14/1M · None t/s · TTFT Nones · 2M ctx` · 가성비 14.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.7 | +0.38 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 50.6 | +0.04 | 실측 | [[terminal-bench]] 22.0%×0.5 |
| 에이전트 | 58.4 | +0.56 | 실측 | [[tau2-bench]] 70.0%×1.0, [[terminal-bench]] 22.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 48.4 | -0.1 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 40.3 | -0.65 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 48.7 | -0.08 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
