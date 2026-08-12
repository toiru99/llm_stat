---
type: Model
title: Qwen3 235B
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 1.47
output_speed_tps: 57.0
context_window: 32800
status: past
size_class: Large
params_b: 235
is_reasoning: true
radar:
  knowledge: { s: 36.6, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.0, z: -0.24, r: 46.3, estimated: false }  # 추론
  coding: { s: 47.5, z: 0.0, r: 50.0, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.77, r: 38.5, estimated: false }  # 에이전트
  trust: { s: 23.3, z: -0.14, r: 48.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.5, r: 27.5, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.64, r: 40.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 235B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Qwen3 235B

Alibaba · Open · Large(235B) · 컨텍스트 32k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $8.4 · 혼합 $1.47/1M · 57.0 t/s · TTFT 2.93s · 32k ctx` · 가성비 8.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 46.3 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 50.0 | +0.0 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 38.5 | -0.77 | 실측 | [[tau2-bench]] 24.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 48.0 | -0.14 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.5 | -1.5 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 40.3 | -0.64 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
