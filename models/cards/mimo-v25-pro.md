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
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 71.0, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 49.1, z: 0.69, r: 60.4, estimated: false }  # 추론
  coding: { s: 69.7, z: 0.97, r: 64.5, estimated: false }  # 코딩
  agentic: { s: 61.7, z: 0.52, r: 57.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 95.1, z: 1.86, r: 77.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# MiMo-V2.5-Pro

Xiaomi · Open · Large(1000B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.348 · 출력 $0.696 · 혼합 $0.1406/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[gpqa-diamond]] 86.5657%×0.4, [[humanitys-last-exam]] 35.6812%×0.3 |
| 추론 | 60.4 | +0.69 | 실측 | [[critpt]] 4%×1.0, [[gpqa-diamond]] 86.5657%×1.0, [[humanitys-last-exam]] 35.6812%×1.0 |
| 코딩 | 64.5 | +0.97 | 실측 | [[scicode]] 50.5787%×1.0, [[terminal-bench]] 43.1818%×0.5 |
| 에이전트 | 57.7 | +0.52 | 실측 | [[gdpval]] 1128.56 Elo×1.0, [[tau2-bench]] 94.152%×1.0, [[tau3-banking]] 9.89691%×1.0, [[terminal-bench]] 43.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | 77.9 | +1.86 | 실측 | [[ifbench]] 79.8639%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
