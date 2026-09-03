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
  knowledge: { s: 49.4, z: 0.43, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 46.2, z: 0.57, r: 58.5, estimated: false }  # 추론
  coding: { s: 56.1, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 69.2, z: 1.23, r: 68.5, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.92, r: 36.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.85, r: 62.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
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
| 전문 지식 | 56.5 | +0.43 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 58.5 | +0.57 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 28.0%×0.5 |
| 에이전트 | 68.5 | +1.23 | 실측 | [[tau2-bench]] 95.0%×1.0, [[terminal-bench]] 28.0%×1.0 |
| 신뢰성 | 36.2 | -0.92 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 62.7 | +0.85 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
