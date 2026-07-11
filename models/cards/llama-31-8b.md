---
type: Model
title: Llama 3.1 8B
creator: Meta
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.08
output_speed_tps: 152.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 12.7, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 8.9, z: -1.3, r: 30.5, estimated: false }  # 추론
  coding: { s: 14.9, z: -1.32, r: 30.3, estimated: false }  # 코딩
  agentic: { s: 5.9, z: -1.18, r: 32.4, estimated: false }  # 에이전트
  trust: { s: 67.1, z: 1.83, r: 77.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.1, z: -0.81, r: 37.9, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.17, r: 32.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Llama 3.1 8B

Meta · Open · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.08 · 출력 $0.1 · 혼합 $0.08/1M · 152.0 t/s · TTFT 0.94s · 128k ctx` · 가성비 100.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.5 | -1.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 30.3 | -1.32 | 실측 | [[scicode]] 13.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 32.4 | -1.18 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 16.0%×1.0, [[tau3-banking]] 2.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 77.5 | +1.83 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.9 | -0.81 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 32.4 | -1.17 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
