---
type: Model
title: Llama 3.2 1B
creator: Meta
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Tiny
params_b: 1
is_reasoning: false
radar:
  knowledge: { s: 10.1, z: -1.5, r: 27.5, estimated: false }  # 전문 지식
  reasoning: { s: 6.2, z: -1.42, r: 28.8, estimated: false }  # 추론
  coding: { s: 2.2, z: -1.89, r: 21.7, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.45, r: 28.3, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.41, r: 56.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.2, z: -1.3, r: 30.5, estimated: false }  # 긴문맥
  instruction: { s: 15.5, z: -1.56, r: 26.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Llama 3.2 1B

Meta · Open · Tiny(1B) · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.5 | -1.5 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 20.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 28.8 | -1.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 20.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 21.7 | -1.89 | 실측 | [[scicode]] 2.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.3 | -1.45 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 56.2 | +0.41 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.5 | -1.3 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 26.6 | -1.56 | 실측 | [[ifbench]] 23.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
