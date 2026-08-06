---
type: Model
title: Qwen3 14B
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.455
output_speed_tps: 47.0
context_window: 32800
status: past
size_class: Small
params_b: 14.8
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.6, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 21.8, z: -0.65, r: 40.3, estimated: false }  # 추론
  coding: { s: 37.6, z: -0.4, r: 43.9, estimated: false }  # 코딩
  agentic: { s: 13.3, z: -0.9, r: 36.5, estimated: false }  # 에이전트
  trust: { s: 27.6, z: -0.05, r: 49.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.48, r: 27.8, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.51, r: 42.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Qwen3 14B

Alibaba · Open · Small(14.8B) · 컨텍스트 32k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.35 · 출력 $4.2 · 혼합 $0.455/1M · 47.0 t/s · TTFT 3.75s · 32k ctx` · 가성비 22.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.6 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.3 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.9 | -0.4 | 실측 | [[scicode]] 32.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 36.5 | -0.9 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 35.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 49.2 | -0.05 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.8 | -1.48 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 42.3 | -0.51 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
