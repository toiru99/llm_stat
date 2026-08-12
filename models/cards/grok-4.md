---
type: Model
title: Grok 4
creator: SpaceXAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.2, z: 1.22, r: 68.3, estimated: false }  # 전문 지식
  reasoning: { s: 49.1, z: 0.7, r: 60.6, estimated: false }  # 추론
  coding: { s: 70.3, z: 0.95, r: 64.3, estimated: false }  # 코딩
  agentic: { s: 66.7, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: 39.5, z: 0.61, r: 59.2, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.25, r: 53.8, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.95, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.23, r: 53.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Grok 4

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 8.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.3 | +1.22 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 60.6 | +0.7 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 64.3 | +0.95 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[tau2-bench]] 75.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 59.2 | +0.61 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | 53.8 | +0.25 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 64.2 | +0.95 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 53.4 | +0.23 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
