---
type: Model
title: Qwen3 32B
creator: Alibaba
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 1.47
output_speed_tps: 94.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.0, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.33, r: 45.0, estimated: false }  # 추론
  coding: { s: 40.4, z: -0.24, r: 46.4, estimated: false }  # 코딩
  agentic: { s: 12.5, z: -0.92, r: 36.2, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.37, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.76, r: 38.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Qwen3 32B

Alibaba · Open · Unknown · 컨텍스트 32k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $8.4 · 혼합 $1.47/1M · 94.0 t/s · TTFT 2.6s · 32k ctx` · 가성비 8.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.0 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 46.4 | -0.24 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 36.2 | -0.92 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 30.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 38.5 | -0.76 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
