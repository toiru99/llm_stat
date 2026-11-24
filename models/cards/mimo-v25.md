---
type: Model
title: MiMo-V2.5
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0462
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 310
is_reasoning: true
radar:
  knowledge: { s: 65.0, z: 0.88, r: 63.3, estimated: false }  # 전문 지식
  reasoning: { s: 44.3, z: 0.46, r: 56.8, estimated: false }  # 추론
  coding: { s: 61.6, z: 0.69, r: 60.4, estimated: false }  # 코딩
  agentic: { s: 58.3, z: 0.4, r: 55.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.3, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 1.12, r: 66.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# MiMo-V2.5

Xiaomi · Open · Large(310B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.112 · 출력 $0.224 · 혼합 $0.0462/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.3 | +0.88 | 실측 | [[gpqa-diamond]] 84.9495%×0.4, [[humanitys-last-exam]] 27.2011%×0.3 |
| 추론 | 56.8 | +0.46 | 실측 | [[critpt]] 3.71429%×1.0, [[gpqa-diamond]] 84.9495%×1.0, [[humanitys-last-exam]] 27.2011%×1.0 |
| 코딩 | 60.4 | +0.69 | 실측 | [[scicode]] 43.8657%×1.0, [[terminal-bench]] 41.6667%×0.5 |
| 에이전트 | 55.9 | +0.4 | 실측 | [[gdpval]] 1004.3 Elo×1.0, [[tau2-bench]] 90.6433%×1.0, [[tau3-banking]] 8.65979%×1.0, [[terminal-bench]] 41.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.4335%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 73%×1.0 |
| 지시 따르기 | 66.7 | +1.12 | 실측 | [[ifbench]] 67.1429%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
