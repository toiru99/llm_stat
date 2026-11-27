---
type: Model
title: MiMo-V2-Pro
creator: Xiaomi
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.2, z: 1.04, r: 65.6, estimated: false }  # 전문 지식
  reasoning: { s: 43.4, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.71, r: 60.6, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.12, r: 66.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 79.7, z: 1.21, r: 68.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# MiMo-V2-Pro

Xiaomi · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 65.6 | +1.04 | 실측 | [[gpqa-diamond]] 86.9697%×0.4, [[humanitys-last-exam]] 30.4449%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 86.9697%×1.0, [[humanitys-last-exam]] 30.4449%×1.0 |
| 코딩 | 60.6 | +0.71 | 실측 | [[terminal-bench]] 40.9091%×0.5 |
| 에이전트 | 66.8 | +1.12 | 실측 | [[tau2-bench]] 95.0292%×1.0, [[terminal-bench]] 40.9091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 68.3333%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 실측 | [[ifbench]] 68.8435%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
