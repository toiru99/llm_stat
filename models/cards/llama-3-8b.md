---
type: Model
title: Llama 3 8B
creator: Meta
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.055
output_speed_tps: None
context_window: 8189
status: past
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 15.2, z: -1.22, r: 31.6, estimated: false }  # 전문 지식
  reasoning: { s: 10.4, z: -1.21, r: 31.9, estimated: false }  # 추론
  coding: { s: 13.3, z: -1.41, r: 28.8, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.42, r: 28.7, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.45, r: 28.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Llama 3 8B

Meta · Open · Small(8B) · 컨텍스트 8k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.04 · 출력 $0.14 · 혼합 $0.055/1M · None t/s · TTFT Nones · 8k ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.6 | -1.22 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.9 | -1.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 28.8 | -1.41 | 실측 | [[scicode]] 12.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.7 | -1.42 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 28.2 | -1.45 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
