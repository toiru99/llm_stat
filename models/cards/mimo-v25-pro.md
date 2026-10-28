---
type: Model
title: MiMo-V2.5-Pro
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.191
output_speed_tps: 52.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 76.2, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 73.9, z: 1.27, r: 69.1, estimated: false }  # 추론
  coding: { s: 70.6, z: 1.12, r: 66.9, estimated: false }  # 코딩
  agentic: { s: 42.9, z: 0.3, r: 54.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.8, r: 77.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# MiMo-V2.5-Pro

Xiaomi · Open · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.41 · 출력 $1.02 · 혼합 $0.191/1M · 52.0 t/s · TTFT 1.12s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 69.1 | +1.27 | 실측 | [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 66.9 | +1.12 | 실측 | [[scicode]] 51.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 54.5 | +0.3 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 1129.0%×1.0, [[itbench]] 38.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 77.0 | +1.8 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
