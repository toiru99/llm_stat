---
type: Model
title: LFM2 1.2B
creator: Liquid AI
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Tiny
params_b: 1.17
is_reasoning: false
radar:
  knowledge: { s: 9.0, z: -1.52, r: 27.2, estimated: false }  # 전문 지식
  reasoning: { s: 8.2, z: -1.31, r: 30.3, estimated: false }  # 추론
  coding: { s: 3.3, z: -1.83, r: 22.6, estimated: false }  # 코딩
  agentic: { s: 6.6, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: 19.8, z: -0.3, r: 45.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.63, r: 25.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2 1.2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# LFM2 1.2B

Liquid AI · Open · Tiny(1.17B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.2 | -1.52 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 30.3 | -1.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 22.6 | -1.83 | 실측 | [[scicode]] 3.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 45.5 | -0.3 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 25.6 | -1.63 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
