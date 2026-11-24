---
type: Model
title: Claude Opus 4.5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 63.8511094472599
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.1, z: 0.36, r: 55.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.2, z: -0.1, r: 48.6, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.71, r: 60.6, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 0.97, r: 64.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.6, z: 0.22, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.67, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.29, r: 45.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Opus 4.5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 63.8511094472599 t/s · TTFT 1.37389041904259s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.4 | +0.36 | 실측 | [[gpqa-diamond]] 81.0101%×0.4, [[humanitys-last-exam]] 13.1603%×0.3 |
| 추론 | 48.6 | -0.1 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 81.0101%×1.0, [[humanitys-last-exam]] 13.1603%×1.0 |
| 코딩 | 60.6 | +0.71 | 실측 | [[terminal-bench]] 40.9091%×0.5 |
| 에이전트 | 64.5 | +0.97 | 실측 | [[tau2-bench]] 86.2573%×1.0, [[terminal-bench]] 40.9091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.22 | 실측 | [[mmmu-pro]] 71.2139%×1.0 |
| 긴문맥 | 60.1 | +0.67 | 실측 | [[aa-lcr]] 70.6667%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 실측 | [[ifbench]] 42.9932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
