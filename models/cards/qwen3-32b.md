---
type: Model
title: Qwen3 32B
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.27
output_speed_tps: 28.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 32.3, z: -0.5, r: 42.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 33.7, z: -0.14, r: 47.9, estimated: false }  # 코딩
  agentic: { s: 5.3, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.49, r: 42.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.88, r: 36.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3 32B

Alibaba · Open · Unknown · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.24 · 출력 $0.54 · 혼합 $0.27/1M · 28.0 t/s · TTFT 1.82s · 32k ctx` · 가성비 25.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.5 | -0.5 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 47.9 | -0.14 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[gdpval]] 33.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 42.7 | -0.49 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 36.7 | -0.88 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
