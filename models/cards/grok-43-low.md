---
type: Model
title: Grok 4.3 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 73.8063633623187
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.4, z: 0.61, r: 59.2, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 40.2, z: -0.03, r: 49.6, estimated: false }  # 코딩
  agentic: { s: 65.0, z: 0.63, r: 59.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.7, z: 0.32, r: 54.8, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 96.7, z: 1.92, r: 78.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Grok 4.3 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 73.8063633623187 t/s · TTFT 6.64002746561757s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.2 | +0.61 | 실측 | [[gpqa-diamond]] 84.3434%×0.4, [[humanitys-last-exam]] 18.3503%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 84.3434%×1.0, [[humanitys-last-exam]] 18.3503%×1.0 |
| 코딩 | 49.6 | -0.03 | 실측 | [[terminal-bench]] 26.5152%×0.5 |
| 에이전트 | 59.4 | +0.63 | 실측 | [[tau2-bench]] 88.8889%×1.0, [[terminal-bench]] 26.5152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.8 | +0.32 | 실측 | [[mmmu-pro]] 72.7746%×1.0 |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 74%×1.0 |
| 지시 따르기 | 78.8 | +1.92 | 실측 | [[ifbench]] 80.9524%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
