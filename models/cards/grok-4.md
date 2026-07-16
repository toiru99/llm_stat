---
type: Model
title: Grok 4
creator: SpaceXAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 7.7
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.9, z: 1.37, r: 70.6, estimated: false }  # 전문 지식
  reasoning: { s: 47.8, z: 0.75, r: 61.3, estimated: false }  # 추론
  coding: { s: 70.3, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 66.7, z: 1.19, r: 67.9, estimated: false }  # 에이전트
  trust: { s: 41.2, z: 0.63, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.32, r: 54.9, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.28, r: 54.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Grok 4

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.5 · 출력 $27.5 · 혼합 $7.7/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.6 | +1.37 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 61.3 | +0.75 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 67.9 | +1.19 | 실측 | [[tau2-bench]] 75.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | 54.9 | +0.32 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 54.2 | +0.28 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
