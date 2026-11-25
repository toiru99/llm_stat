---
type: Model
title: MiMo-V2-Omni
creator: Xiaomi
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.6, z: 0.67, r: 60.1, estimated: false }  # 전문 지식
  reasoning: { s: 38.8, z: 0.18, r: 52.7, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 0.89, r: 63.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.9, z: 0.13, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 84.6, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 58.2, z: 0.32, r: 54.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# MiMo-V2-Omni

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.1 | +0.67 | 실측 | [[gpqa-diamond]] 82.8283%×0.4, [[humanitys-last-exam]] 22.1038%×0.3 |
| 추론 | 52.7 | +0.18 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 82.8283%×1.0, [[humanitys-last-exam]] 22.1038%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[terminal-bench]] 34.8485%×0.5 |
| 에이전트 | 63.4 | +0.89 | 실측 | [[tau2-bench]] 91.2281%×1.0, [[terminal-bench]] 34.8485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.9 | +0.13 | 실측 | [[mmmu-pro]] 69.8844%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 75%×1.0 |
| 지시 따르기 | 54.8 | +0.32 | 실측 | [[ifbench]] 53.5374%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
