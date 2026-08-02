---
type: Model
title: Qwen3 235B
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: 61.0
context_window: 32800
status: past
size_class: Large
params_b: 235
is_reasoning: true
radar:
  knowledge: { s: 37.2, z: -0.19, r: 47.1, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.18, r: 47.2, estimated: false }  # 추론
  coding: { s: 47.5, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.77, r: 38.5, estimated: false }  # 에이전트
  trust: { s: 25.3, z: -0.13, r: 48.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 235B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Qwen3 235B

Alibaba · Open · Large(235B) · 컨텍스트 32k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $8.4 · 혼합 $None/1M · 61.0 t/s · TTFT 2.82s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.1 | -0.19 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 47.2 | -0.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 38.5 | -0.77 | 실측 | [[tau2-bench]] 24.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 48.0 | -0.13 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 40.7 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
