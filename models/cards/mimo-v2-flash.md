---
type: Model
title: MiMo-V2-Flash
creator: Xiaomi
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.12
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 309
is_reasoning: true
radar:
  knowledge: { s: 50.3, z: 0.46, r: 56.8, estimated: false }  # 전문 지식
  reasoning: { s: 47.5, z: 0.63, r: 59.4, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.42, r: 56.3, estimated: false }  # 코딩
  agentic: { s: 69.2, z: 1.33, r: 69.9, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.94, r: 35.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.81, r: 62.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# MiMo-V2-Flash

Xiaomi · Open · Large(309B) · 컨텍스트 256k · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 266.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.8 | +0.46 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 59.4 | +0.63 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 56.3 | +0.42 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 28.0%×0.5 |
| 에이전트 | 69.9 | +1.33 | 실측 | [[tau2-bench]] 95.0%×1.0, [[terminal-bench]] 28.0%×1.0 |
| 신뢰성 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 62.1 | +0.81 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
