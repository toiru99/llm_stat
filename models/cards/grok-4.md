---
type: Model
title: Grok 4
creator: SpaceXAI
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 1.0, r: 65.0, estimated: false }  # 전문 지식
  reasoning: { s: 46.8, z: 0.47, r: 57.0, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.73, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 66.7, z: 1.07, r: 66.0, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.39, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.13, r: 52.0, estimated: false }  # 멀티모달
  long_context: { s: 76.4, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.21, r: 53.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Grok 4

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 5.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.0 | +1.0 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 57.0 | +0.47 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 60.9 | +0.73 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 66.0 | +1.07 | 실측 | [[tau2-bench]] 75.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 55.9 | +0.39 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | 52.0 | +0.13 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 53.1 | +0.21 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
