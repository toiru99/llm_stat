---
type: Model
title: Grok 4
creator: SpaceXAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.4, z: 1.13, r: 67.0, estimated: false }  # 전문 지식
  reasoning: { s: 47.3, z: 0.59, r: 58.8, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.9, r: 63.4, estimated: false }  # 코딩
  agentic: { s: 66.7, z: 1.12, r: 66.8, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.5, r: 57.5, estimated: false }  # 신뢰성
  multimodal: { s: 75.0, z: 0.24, r: 53.6, estimated: false }  # 멀티모달
  long_context: { s: 76.4, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.28, r: 54.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Grok 4

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 6.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.0 | +1.13 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 58.8 | +0.59 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 63.4 | +0.9 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 66.8 | +1.12 | 실측 | [[tau2-bench]] 75.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 57.5 | +0.5 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | 53.6 | +0.24 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 54.1 | +0.28 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
