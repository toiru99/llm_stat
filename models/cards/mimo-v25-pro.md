---
type: Model
title: MiMo-V2.5-Pro
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1406
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.0, z: 1.14, r: 67.1, estimated: false }  # 전문 지식
  reasoning: { s: 49.1, z: 0.67, r: 60.0, estimated: false }  # 추론
  coding: { s: 69.7, z: 1.01, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 61.7, z: 0.58, r: 58.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 95.1, z: 1.72, r: 75.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# MiMo-V2.5-Pro

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.348 · 출력 $0.696 · 혼합 $0.1406/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.1 | +1.14 | 실측 | [[gpqa-diamond]] 86.5656565656566%×0.4, [[humanitys-last-exam]] 35.6811862835959%×0.3 |
| 추론 | 60.0 | +0.67 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 86.5656565656566%×1.0, [[humanitys-last-exam]] 35.6811862835959%×1.0 |
| 코딩 | 65.1 | +1.01 | 실측 | [[scicode]] 50.578703703703695%×1.0, [[terminal-bench]] 43.1818181818182%×0.5 |
| 에이전트 | 58.7 | +0.58 | 실측 | [[gdpval]] 1127.94%×1.0, [[tau2-bench]] 94.15204678362569%×1.0, [[tau3-banking]] 9.896907216494839%×1.0, [[terminal-bench]] 43.1818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 75.9 | +1.72 | 실측 | [[ifbench]] 79.8639455782313%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
