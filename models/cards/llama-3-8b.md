---
type: Model
title: Llama 3 8B
creator: Meta
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.06
output_speed_tps: None
context_window: 8189
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.8, z: -1.19, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 10.5, z: -1.21, r: 31.8, estimated: false }  # 추론
  coding: { s: 13.3, z: -1.38, r: 29.3, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.4, r: 29.0, estimated: false }  # 에이전트
  trust: { s: 12.9, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.6, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.4, r: 29.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Llama 3 8B

Meta · Open · Unknown · 컨텍스트 8k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.04 · 출력 $0.14 · 혼합 $0.06/1M · None t/s · TTFT Nones · 8k ctx` · 가성비 16.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.19 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.8 | -1.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 29.3 | -1.38 | 실측 | [[scicode]] 12.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 29.0 | -1.4 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.6 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 29.1 | -1.4 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
