---
type: Model
title: Grok 4.20 0309 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: 1.14
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.5, z: 0.27, r: 54.1, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.14, r: 52.1, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.12, r: 48.2, estimated: false }  # 코딩
  agentic: { s: 52.0, z: 0.49, r: 57.4, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -1.0, r: 35.0, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.22, r: 46.8, estimated: false }  # 멀티모달
  long_context: { s: 28.1, z: -0.72, r: 39.2, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.16, r: 47.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.20 0309 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Grok 4.20 0309 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.14/1M · None t/s · TTFT Nones · 2M ctx` · 가성비 13.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.1 | +0.27 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 52.1 | +0.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 48.2 | -0.12 | 실측 | [[terminal-bench]] 22.0%×0.5 |
| 에이전트 | 57.4 | +0.49 | 실측 | [[tau2-bench]] 70.0%×1.0, [[terminal-bench]] 22.0%×1.0 |
| 신뢰성 | 35.0 | -1.0 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 46.8 | -0.22 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 39.2 | -0.72 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 47.7 | -0.16 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
