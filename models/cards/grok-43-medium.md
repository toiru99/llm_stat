---
type: Model
title: Grok 4.3 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 78.6311069770345
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.3, z: 1.09, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 48.2, z: 0.65, r: 59.7, estimated: false }  # 추론
  coding: { s: 46.0, z: 0.17, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 69.0, z: 0.77, r: 61.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.8, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 84.6, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 2.06, r: 80.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Grok 4.3 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 78.6311069770345 t/s · TTFT 12.1259661475778s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 실측 | [[gpqa-diamond]] 88.9899%×0.4, [[humanitys-last-exam]] 29.9815%×0.3 |
| 추론 | 59.7 | +0.65 | 실측 | [[critpt]] 4.85714%×1.0, [[gpqa-diamond]] 88.9899%×1.0, [[humanitys-last-exam]] 29.9815%×1.0 |
| 코딩 | 52.5 | +0.17 | 실측 | [[terminal-bench]] 30.303%×0.5 |
| 에이전트 | 61.5 | +0.77 | 실측 | [[tau2-bench]] 91.2281%×1.0, [[terminal-bench]] 30.303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 75.8382%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 75%×1.0 |
| 지시 따르기 | 80.9 | +2.06 | 실측 | [[ifbench]] 83.3333%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
